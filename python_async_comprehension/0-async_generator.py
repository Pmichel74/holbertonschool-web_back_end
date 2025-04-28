#!/usr/bin/env python3
"""Async generator that yields a random number every second."""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
        Generate numbers

        Args:
            void

        Return:
            float time random
    """
    while True:
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
