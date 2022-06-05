from django.shortcuts import render
from django.http import HttpResponse
import json
import random           

def play(request):
    return render(request,"play.html")

def index(request):
			# print("sonal")
			userans=request.GET['userans']
			print("userans",userans)
			gamelist = ['rock', 'paper', 'scissor']
			computerans = random.choice(gamelist)
			print("computerans",computerans)
			if userans == computerans:
				winner = "SORRY!Its a tie"
			elif userans == "rock":
				if computerans == "scissor":
					winner = "Great Buddy!You win"
				else:
					winner = "OOPS Buddy!Computer"
			elif userans == "paper":
				if computerans == "rock":
					winner = "Great Buddy!You win"
				else:
					winner = "OOPS Buddy!Computer"
			elif userans == "scissor":
				if computerans == "paper":
					winner = "Great Buddy!You win"
				else:
					winner = "OOPS Buddy!Computer"
			
			resultdict={'winner':winner,'user_input':userans,'computer_pick':computerans}
			print(resultdict)
			json_response=json.dumps(resultdict,indent=5)
			print(json_response)
			return HttpResponse(json_response,content_type='application/json')
			