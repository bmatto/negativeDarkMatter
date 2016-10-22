from random import randint


def spark_life():
    not_quite_dead = randint(1,3)

    if not_quite_dead == 1:
        return 'eggs'
    else:
        return 'spam!'

def big_bang():
    verse_length = 64
    verse_breadth = 64
    universe = []

    for row in range(0,verse_breadth):
        universal_row = []
        for col in range(0,verse_length):
            universal_row.append(spark_life()) 
        universe.append(universal_row)

    return universe

big_bang()

