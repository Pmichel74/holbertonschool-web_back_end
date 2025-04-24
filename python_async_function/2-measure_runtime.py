#!/usr/bin/env python3
"""Module contains function that verifies async runtime

Imports:
    1-concurrent_coroutines: async function to verify
    time: time module to get elapsed time
    asyncio: async module
"""
import time
import asyncio
n_wait = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """Function that measures time of async function

    Args:
        n (int): num of times to run async function
        max_delay (int): max delay of function

    Returns:
        float: returns time
    """
    # Enregistrement du temps de départ avec grande précision
    start_time = time.perf_counter()
    # Exécution de la fonction asynchrone wait_n
    await n_wait(n, max_delay)
    # Enregistrement du temps de fin
    end_time = time.perf_counter()

    # Calcul du temps total écoulé
    elapsed = end_time - start_time

    # Calcul et renvoi du temps moyen par opération
    return elapsed / n
