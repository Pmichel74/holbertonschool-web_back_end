#!/usr/bin/env python3
"""Module contient une fonction qui gère plusieurs coroutines asynchrones

Imports:
    List: Module pour l'annotation de type liste
    wait_random: fonction qui attend pendant un délai aléatoire
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Fonction qui exécute plusieurs coroutines asynchrones en parallèle

    Args:
        n (int): nombre de fois pour exécuter la fonction wait_random
        max_delay (int): Délai maximum à passer à wait_random

    Returns:
        List[float]: Liste des délais retournés par wait_random en ordre croissant
    """
    # Création de n tâches asynchrones
    tasks = [wait_random(max_delay) for _ in range(n)]
    # Exécution concurrente de toutes les tâches
    delays = await asyncio.gather(*tasks)
    
    # Tri manuel de la liste des délais sans utiliser sort()
    sorted_delays: List[float] = []
    for delay in delays:
        # Trouver la position correcte pour insérer le délai
        idx = 0
        while idx < len(sorted_delays) and delay > sorted_delays[idx]:
            idx += 1
        sorted_delays.insert(idx, delay)
    
    return sorted_delays
