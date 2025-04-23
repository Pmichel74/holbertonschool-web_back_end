#!/usr/bin/env python3
"""
    4-define_variables.py
    Module contains function that returns a list of variables
"""
from typing import List, Tuple

a: int = 1
pi: float = 3.14
i_understand_annotations: bool = True
school: str = "Holberton"


def define_variables() -> Tuple[int, float, str, List[int],
                                Tuple[bool, bool], float]:
    """
        Function that returns a list of variables
        Returns:
            Tuple: tuple of variables
    """
    return a, pi, school, [1, 2, 3], (True, False), pi
