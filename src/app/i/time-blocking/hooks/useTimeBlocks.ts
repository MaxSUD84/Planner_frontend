import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { timeBlockService } from '@/services/time-block.service';
import type { ITimeBlockResponse } from '@/types';

export const useTimeBlocks = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['time-blocks'],
		queryFn: async () => timeBlockService.getTimeBlocks(),
	});

	const [items, setItems] = useState<ITimeBlockResponse[] | undefined>(
		data?.data,
	);

	useEffect(() => {
		setItems(data?.data);
	}, [data?.data]);

	return { items, setItems, isLoading };
};
