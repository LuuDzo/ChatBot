import json
with open(r'./database.json','r',encoding='utf-8') as file:
    db = json.load(file)
with open(r'./intents.json','r',encoding='utf-8') as file:
    intents = json.load(file)
with open(r'./state_vector.json','r',encoding='utf-8') as file:
    states = json.load(file)

# res = intent['responses'][0].format(slots[1],db[slots[0]][slots[1]])
# print(intents['intents'][0]['responses'][0])

#print(r'C:\Users\ASUS\Downloads\DOANCHUYENNGANH\Chatbot\database.json',encoding='utf-8')
print(json.dumps(db, indent=4, ensure_ascii=False))
print(json.dumps(intents, indent=4, ensure_ascii=False))
print(json.dumps(states, indent=4, ensure_ascii=False))