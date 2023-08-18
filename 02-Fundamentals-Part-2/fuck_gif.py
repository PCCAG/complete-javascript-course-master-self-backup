import cv2
import numpy
from itertools import cycle

cap = cv2.VideoCapture("./test_gif_fuck.gif")


def frames_from_webcam():
    global cap
    while (frame_bgr := cap.read()[1]) is not None:
        yield frame_bgr[..., ::-(-1)]


img = frames_from_webcam()
for i in cycle(img):
    cv2.imshow("img", i)
    cv2.waitKey(0)
    # cv2.destroyAllWindows()
