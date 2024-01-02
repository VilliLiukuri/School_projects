scores = []

for i in range(5):
    score =int(input("Give points:"))
    scores.append(score)

scores.sort()
scores.remove(max(scores))
scores.remove(min(scores))
print("Total points:", sum(scores))