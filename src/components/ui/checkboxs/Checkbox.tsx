export const Checkbox = (
    props: {
        id?: string
        extra?: string
        color?: 
        | 'red'
        | 'blue'
        | 'green'
        | 'yellow'
        | 'orange'
        | 'teal'
        | 'navy'
        | 'lime'
        | 'cyan'
        | 'pink'
        | 'purple'
        | 'amber'
        | 'indigo'
        | 'gray'
        [x: string]: any
    }
) => {
    const { id, extra, color, ...rest } = props
    return (
        <input
            id={id}
            type="checkbox"
            className={`default-checkbox relative inline-flex h-[20px] min-h-[20px] w-[20px] min-w-[20px]
                appearance-none items-center justify-center rounded-md border border-gray-300
                text-white/0 outline-none transition ease-linear
                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10
                ${
                    color === 'red' && 'checked:bg-red-500 hover:bg-red-500/10'
                    || color === 'blue' && 'checked:bg-blue-500 hover:bg-blue-500/10'
                    || color === 'green' && 'checked:bg-green-500 hover:bg-green-500/10'
                    || color === 'yellow' && 'checked:bg-yellow-500 hover:bg-yellow-500/10'
                    || color === 'orange' && 'checked:bg-orange-500 hover:bg-orange-500/10'
                    || color === 'teal' && 'checked:bg-teal-500 hover:bg-teal-500/10'
                    || color === 'navy' && 'checked:bg-navy-500 hover:bg-navy-500/10'
                    || color === 'lime' && 'checked:bg-lime-500 hover:bg-lime-500/10'
                    || color === 'cyan' && 'checked:bg-cyan-500 hover:bg-cyan-500/10'
                    || color === 'pink' && 'checked:bg-pink-500 hover:bg-pink-500/10'
                    || color === 'purple' && 'checked:bg-purple-500 hover:bg-purple-500/10'
                    || color === 'amber' && 'checked:bg-amber-500 hover:bg-amber-500/10'
                    || color === 'indigo' && 'checked:bg-indigo-500 hover:bg-indigo-500/10'
                    || color === 'gray' && 'checked:bg-gray-500 hover:bg-gray-500/10'
                } ${extra}`}
            name="weekly"
            {...rest}
        />
    )
}