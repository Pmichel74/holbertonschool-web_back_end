#!/usr/bin/env python3
""" coroutine called async_generator that takes no arguments.
    The coroutine will loop 10 times, each time asynchronously wait 1 second,
    then yield a random number between 0 and 10. Use the random module. """
import asyncio  # Importation du module asyncio pour la gestion asynchrone
from typing import Generator  # Importation du type Generator pour l'annotation de type
import random  # Importation du module random pour générer des nombres aléatoires


async def async_generator() -> Generator[float, None, None]:
    """Générateur asynchrone qui yield 10 nombres aléatoires entre 0 et 10,
    en attendant 1 seconde entre chaque."""
    for i in range(10):  # Boucle 10 fois
        await asyncio.sleep(1)  # Attend 1 seconde de façon asynchrone
        yield random.uniform(0, 10)  # 'yield' permet de renvoyer une valeur sans arrêter la fonction, 
                                     # la fonction reprendra à cette ligne lors du prochain appel.
