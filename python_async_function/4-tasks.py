#!/usr/bin/env python3
"""Module contains function that takes two integers

Imports:
    List: module for list type annotation
    task_wait_random: function that returns an asyncio.Task
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Function takes integers and calls task_wait_random function

    Args:
        n (int): num of times to call task_wait_random
        max_delay (int): Num of seconds to delay task_wait_random

    Returns:
        List[float]: List of task_wait_random returns in ascending order
    """
    # Création d'une liste de tâches asynchrones
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    # Exécution de toutes les tâches en parallèle et récupération des résultats
    results = []
    
    for task in asyncio.as_completed(tasks):
        delay = await task
        results.append(delay)
       
    return results