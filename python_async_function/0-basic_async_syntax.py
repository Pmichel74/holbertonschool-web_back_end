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
    # Génération d'un nombre aléatoire entre 0 et max_delay
    delay = random.uniform(0, max_delay)
    # Attente asynchrone pendant le délai calculé
    await asyncio.sleep(delay)
    # Retourne le délai qui a été utilisé
    return delay
