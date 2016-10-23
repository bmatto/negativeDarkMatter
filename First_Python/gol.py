from random import randint
import numpy as np

def something():
    return 'whatever'

def hand_of_god():
    god_plays_dice = randint(1,3)
    if god_plays_dice == 3:
        return 1
    else:
        return 0

def generate_grid(rows, cols):
    grid = []

    for row in range(0,rows):
        grid_row = []
        for col in range(0,cols):
          grid_row.append(hand_of_god())
        grid.append(grid_row)

    return grid

print np.matrix(generate_grid(6,6))

def the_rules_of_life():

def get_number_of_neighbors():
    # evaluate all the cells arround the cell and make a count


