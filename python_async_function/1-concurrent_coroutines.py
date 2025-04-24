#!/usr/bin/env python3
"""Module contains function that takes two integers

Imports:
    List: module for list type annotation
    wait_random: function delays for n seconds and returns n
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Function takes integers and calls wait_random function

    Args:
        n (int): num of times to call wait_random
        max_delay (int): Num of seconds to delay wait_random

    Returns:
        List[float]: List of wait_random returns in ascending order
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    
    # Manual sorting of the delays list without using sort()
    sorted_delays: List[float] = []
    for delay in delays:
        # Find the correct position to insert the delay
        idx = 0
        while idx < len(sorted_delays) and delay > sorted_delays[idx]:
            idx += 1
        sorted_delays.insert(idx, delay)
    
    return sorted_delays
