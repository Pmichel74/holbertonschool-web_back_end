#!/usr/bin/env python3
"""Module contains function that delays n seconds and then returns n

Imports:
    random: Contains the .uniform method
    asyncio: Contains the sleep method
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Function that waits for a random delay

    Args:
        max_delay (int): The maximum delay to wait for

    Returns:
        float: The random delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
