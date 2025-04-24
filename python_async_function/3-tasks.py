#!/usr/bin/env python3
"""Module contains function that takes two integers

Imports:
    asyncio: module contains create_task
    wait_random: function delays for n seconds and returns n
    typing: code contains type annotations
"""
import asyncio

# Importation de la fonction wait_random depuis le module précédent
# Cette méthode d'importation permet de charger dynamiquement un module
random_wait = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Function returns create_task

    Args:
        max_delay (int): max num to delay async function

    Returns:
        _type_: asyncio task
    """
    # Création d'une tâche asyncio à partir de la coroutine random_wait
    # Cette tâche peut être ajoutée à une boucle d'événements pour exécution
    result = asyncio.create_task(random_wait(max_delay))
    return result
