import itertools, random
values = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king","ace"]
colors = ["spades","clubs","hearts","diamonds"]
deck = list(itertools.product(colors, values))
random.shuffle(deck)
for val, col in deck:
    print(val, col)