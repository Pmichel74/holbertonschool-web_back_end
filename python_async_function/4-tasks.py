#!/usr/bin/env python3
"""Module contains function that takes two integers

Imports:
    typing: module for list type annotation
    asyncio: module for concurrency
    task_wait_random: function that returns an asyncio.Task
"""
import asyncio
from typing import List
# This import assumes '3-tasks' module provides 'task_wait_random'
# even if the file content shown earlier seemed different.
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Function takes integers and calls task_wait_random function concurrently

    Args:
        n (int): num of times to call task_wait_random
        max_delay (int): Num of seconds to delay task_wait_random

    Returns:
        List[float]: List of task_wait_random results in ascending order
    """
    tasks = [asyncio.create_task(task_wait_random(max_delay)) for _ in range(n)]
    delays = await asyncio.gather(*tasks)

    # Manual bubble sort (as was present in the original 4-tasks.py)
    for end in range(len(delays), 1, -1):
        for j in range(1, end):
            if delays[j - 1] > delays[j]:
                delays[j - 1], delays[j] = delays[j], delays[j - 1]
    return delays
