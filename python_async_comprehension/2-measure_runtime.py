#!/usr/bin/env python3
""" Import async_comprehension from the previous file and write a
    measure_runtime coroutine that will execute async_comprehension four times
    in parallel using asyncio.gather.
    measure_runtime should measure the total runtime and return it.
    Notice that the total runtime is roughly 10 seconds,
    explain it to yourself. """
import asyncio
import time
# Import de la coroutine async_comprehension du fichier précédent
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Mesure le temps d'exécution pour quatre async_comprehension lancées en parallèle.
    Retourne le temps total écoulé en secondes.
    """
    tasks = []  # Liste pour stocker les tâches asynchrones
    start_time = time.time()  # Début du chronomètre
    for i in range(4):
        # Création et ajout de 4 tâches async_comprehension à exécuter en parallèle
        tasks.append(asyncio.create_task(async_comprehension()))
    await asyncio.gather(*tasks)  # Exécution parallèle des tâches
    end_time = time.time()  # Fin du chronomètre
    return end_time - start_time  # Retourne la durée totale
