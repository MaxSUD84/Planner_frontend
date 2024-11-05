'use client'

import { useTimer } from "./hooks/useTimer"
import { useTimerActions } from "./hooks/useTimerActions"
import { useTodaySession } from "./hooks/useTodaySession"
import { formatTime } from "./format-time"
import Loader from "@/components/ui/Loader"
import { Pause, Play, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui"
import { PomodoroRounds } from "./rounds/PomodoroRounds"
import { useDeleteSession } from "./hooks/useDeleteSession"
import { useCreateSession } from "./hooks/useCreateSession"

export function Pomodoro() {
    const timerState = useTimer()
    const { isLoading, sessionsResponse, workInterval } = useTodaySession(timerState)

    const rounds = sessionsResponse?.data.rounds || []
    const actions = useTimerActions({ ...timerState, rounds })
    const { createSession, isCreatePending } = useCreateSession()
    const { deleteSession, isDeletePending} = useDeleteSession(() => timerState.setSecondsLeft(workInterval * 60))

    return (
        <div className="relative w-80 text-center">
            {!isLoading && (
                <div className="text-7xl font-semibold">{formatTime(timerState.secondsLeft)}</div>
            )}
            {isLoading && <Loader />}
            {sessionsResponse?.data.rounds ? (
                <>
                    <PomodoroRounds 
                        rounds={rounds} 
                        nextRoundHandler={actions.nextRoundHandler}
                        prevRoundHandler={actions.prevRoundHandler}
                        activeRound={timerState.activeRound}
                    />
                    <button
                        className="mt-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
                        onClick={timerState.isRunning ? actions.pauseHandler : actions.playHandler}
                        disabled={actions.isUpdateRoundPending}
                    >
                        {timerState.isRunning ? <Pause size={24} /> : <Play size={24} />}  
                    </button>
                    <button
                        onClick={() => {
                            timerState.setIsRunning(false)
                            deleteSession(sessionsResponse.data.id)
                        }}
                        className="absolute top-1 right-1 opacity-40 hover:opacity-90 transition-opacity duration-300"
                        disabled={isDeletePending}
                    >
                        <RefreshCcw size={19} />    
                    </button>
                </>
            ): (
                <Button
                    className="mt-1"
                    disabled={isCreatePending}
                    onClick={() => createSession()}
                >
                    Создать сессию
                </Button>
            )}
       
        </div>
    )
}
