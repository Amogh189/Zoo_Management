import express from 'express'
import { getAnimals ,getDoctors , getEnclosures ,getKeepers, getVaccinations, getMedications,getTickets,getVisitors, createDoctors,createAnimals,createKeepers,createEnclosures,createVaccinations,createMedications,createTickets,createVisitors,deleteKeepers,deleteAnimals,deleteMedications,deleteTickets,deleteVisitors,deleteVaccinations,deleteEnclosures} from './database.js'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.get("/doctors", async (req, res) => {
    const doctors = await getDoctors()
    res.json(doctors)
}) 
app.get("/animals", async (req, res) => {
    const animals = await getAnimals()
    res.send(animals)
}) 
app.get("/enclosures", async (req, res) => {
    const enclosures = await getEnclosures()
    res.send(enclosures)
}) 
app.get("/keepers", async (req, res) => {
    const keepers = await getKeepers()
    res.send(keepers)

}) 
app.get("/vaccinations", async (req, res) => {
    const vaccinations = await getVaccinations()
    res.send(vaccinations)
}) 
app.get("/medications", async (req, res) => {
    const medications = await getMedications()
    res.send(medications)
}) 
app.get("/tickets", async (req, res) => {
    const tickets = await getTickets()
    res.send(tickets)
}) 
app.get("/visitors", async (req, res) => {
    const visitors = await getVisitors()
    res.send(visitors)
}) 
app.post("/doctors",async(req,res) => {
    const { doc_id,doc_name,specialization} = req.body
    const doctors =await createDoctors(doc_id, doc_name,specialization)

    res.send(doctors)
})
app.post("/enclosures",async(req,res) => {
    const {enclosure_id,enclosure_name,enclosure_type,enclosure_size,enclosure_capacity,keeper_id} = req.body
    const enclosures =await createEnclosures(enclosure_id,enclosure_name,enclosure_type,enclosure_size,enclosure_capacity,keeper_id)
    res.send(enclosures)
})
app.post("/animals",async(req,res) => {
    const { animal_id,animal_name,species,age,enclosure_id,keeper_id,doc_id} = req.body
    const animals =await createAnimals(animal_id,animal_name,species,age,enclosure_id,keeper_id,doc_id)
    res.send(animals)
})
app.post("/keepers",async(req,res) => {
    const {keeper_id,keeper_name,contact,age} = req.body
    const keepers =await createKeepers(keeper_id,keeper_name,contact,age)
    res.send(keepers)
})
app.post("/vaccinations",async(req,res) => {
    const { vaccination_id,vaccination_name,doc_id,animal_id,vaccination_date,nextvisit} = req.body
    const vaccinations =await createVaccinations(vaccination_id,vaccination_name,doc_id,animal_id,vaccination_date,nextvisit)
    res.send(vaccinations)
})
app.post("/medications",async(req,res) => {
    const {record_id, animal_id , doc_id , treatment , medication_date} = req.body
    const medications =await createMedications(record_id, animal_id , doc_id , treatment , medication_date)
    res.send(medications)
})
app.post("/tickets",async(req,res) => {
    const {ticket_id,price} = req.body
    const tickets =await createTickets(ticket_id,price)
    res.send(tickets)
})
app.post("/visitors",async(req,res) => {
    const {visitor_id,visitor_name,contact,ticket_id} = req.body
    const visitors =await createVisitors(visitor_id,visitor_name,contact,ticket_id)
    res.send(visitors)
})
app.delete("/keepers",async(req,res) => {
    const {keeper_id} = req.body
    const keepers  = await deleteKeepers(keeper_id)
    res.send(keepers)
})
app.delete("/animals",async(req,res) => {
    const {animal_id} = req.body
    const animals  = await deleteAnimals(animal_id)
    res.send(animals)
})
app.delete("/medications",async(req,res) => {
    const {record_id} = req.body
    const medications  = await deleteMedications(record_id)
    res.send(medications)
})
app.delete("/tickets",async(req,res) => {
    const {ticket_id} = req.body
    const tickets  = await deleteTickets(ticket_id)
    res.send(tickets)
})
app.delete("/visitors",async(req,res) => {
    const {visitor_id} = req.body
    const visitors  = await deleteVisitors(visitor_id)
    res.send(visitors)
})
app.delete("/vaccinations",async(req,res) => {
    const {vaccination_id} = req.body
    const vaccinations  = await deleteVaccinations(vaccination_id)
    res.send(vaccinations)
})
app.delete("/enclosures",async(req,res) => {
    const {enclosure_id} = req.body
    const enclosures  = await deleteEnclosures(enclosure_id)
    res.send(enclosures)
})
    

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  app.listen(8080, () => {
    console.log('server listening on port 8080')
  })