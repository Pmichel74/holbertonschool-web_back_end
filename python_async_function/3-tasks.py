#!/usr/bin/env python3
"""Module contains function that takes two integers

Imports:
    asyncio: module contains create_task
    wait_random: function delays for n seconds and returns n
    typing: code contains type annotations
"""
import asyncio
import time
n_wait = __import__('1-concurrent_coroutines').wait_n
wait_random = __import__('0-basic_async_syntax').wait_random


async def measure_time(n: int, max_delay: int) -> float:
    """Function meausres async function runtime

    Args:
        n (int): num of times to run async function
        max_delay (int): max delay of function

    Returns:
        float: return time
    """
    start_time = time.perf_counter()
    asyncio.run(n_wait(n, max_delay))
    end_time = time.perf_counter()

    elapsed = end_time - start_time

    return elapsed / n


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Function that creates and returns an asyncio.Task

    Args:
        max_delay (int): max delay for wait_random

    Returns:
        asyncio.Task: Task that will execute wait_random
    """
    return asyncio.create_task(wait_random(max_delay))
