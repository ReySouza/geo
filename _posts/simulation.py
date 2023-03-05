import random
import math
import numpy as np

class DefineNeedle:
    def __init__(self, x=None, y=None, theta=None, length=0.5):
        if x is None:
            x = random.uniform(0, 1)
        if y is None:
            y = random.uniform(0, 1)
        if theta is None:
            theta = random.uniform(0, math.pi)

        self.needle_coordinates = np.array([x, y])
        self.complex_representation = np.array(
            [length/2 * math.cos(theta), length/2*math.sin(theta)])
        self.end_points = np.array([np.add(self.needle_coordinates, -1*np.array(
            self.complex_representation)), np.add(self.needle_coordinates, self.complex_representation)])

    def intersects_with_y(self, y):
        return self.end_points[0][1] < y and self.end_points[1][1] > y


class BuffonSimulation:
    def __init__(self, boards, agulhas):
        self.floor = []
        self.boards = boards
        self.list_of_needle_objects = []
        self.number_of_intersections = 0
        self.agulhas = agulhas

    def toss_needles(self):
        needle_object = DefineNeedle()
        self.list_of_needle_objects.append(needle_object)

        for board in range(self.boards):
            if needle_object.intersects_with_y(board):
                self.number_of_intersections += 1
                return
        return

    def estimate_pi(self, needles_tossed=0):
        if self.number_of_intersections == 0:
            estimated_pi = 0
        else:
            estimated_pi = (needles_tossed) / \
                (1 * self.number_of_intersections)
        error = abs(((math.pi - estimated_pi)/math.pi)*100)
        return {"intersections": self.number_of_intersections, "needles_tossed": needles_tossed, "estimated_pi": estimated_pi}

    def run_simulation(self):
        for needle in range(self.agulhas):
            self.toss_needles()
            yield self.estimate_pi(needle+1)

simulation = BuffonSimulation(boards=2, agulhas=10000)
for result in simulation.run_simulation():
    print(result)
