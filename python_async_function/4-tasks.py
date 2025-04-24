#!/usr/bin/env python3
"""Multiple coroutines"""
import asyncio
from typing import List


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    --------------
    METHOD: wait_n
    --------------
    Description:
        Executes multiple coroutines at
        the same time with async
    Args:
        @n: runs wait_random n number of times
        @max_delay: specifies the max delay with
        each run of wait_random
    """
    task_wait_random = __import__('3-tasks').task_wait_random
    tasks = [asyncio.create_task(task_wait_random(max_delay)) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    # Tri manuel (comme dans wait_n)
    for end in range(len(delays), 1, -1):
        for j in range(1, end):
            if delays[j - 1] > delays[j]:
                delays[j - 1], delays[j] = delays[j], delays[j - 1]
    return delays
