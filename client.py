#Imports
from fhirpy import SyncFHIRClient
from fhir.resources.patient import Patient
from fhir.resources.observation import Observation

from fhir.resources.humanname import HumanName
from fhir.resources.contactpoint import ContactPoint
from fhir.resources.reference import Reference
from fhir.resources.codeableconcept import CodeableConcept
from fhir.resources.coding import Coding
from fhir.resources.quantity import Quantity

import json

#Part 1----------------------------------------------------------------------------------------------------------------------------------------------------
#Create our client, connected to our server
client = SyncFHIRClient(url='https://fhir.jtcxabeqnhyb.static-test-account.isccloud.io', extra_headers={"x-api-key":"3CqdpaNgyP9Po6UabmDNE4GubtUW2Sqj9nmqEfzb"})

#Get our patient resources in which we will be able to fecth and search
patients_resources = client.resources('Patient')

#Part 2----------------------------------------------------------------------------------------------------------------------------------------------------
#We want to create a patient and save it into our server

#Create a new patient using fhir.resources
patient0 = Patient()

#Create a HumanName and fill it with the information of our patient
name = HumanName()
name.use = "official"
name.family = "Andreev"
name.given = ["Lev"]

patient0.name = [name]

#Check our patient in the terminal
print()
print("Our patient : ",patient0)
print()

#Save (post) our patient0, it will create it in our server
# client.resource('Patient',**json.loads(patient0.json())).save()

#Part 3----------------------------------------------------------------------------------------------------------------------------------------------------
#Now we want to get a certain patient and add his phone number and change his name before saving our changes in the server

#Get the patient as a fhir.resources Patient of our list of patient resources who has the right name, for convenience we will use the patient we created before
patient0 = Patient.parse_obj(patients_resources.search(family='Andreev',given='Lev').first().serialize())

print()
print(patient0)
