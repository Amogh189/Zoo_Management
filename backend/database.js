import mysql from 'mysql2'
const pool =mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'amogh@2003',
    database: 'zoo2'
}).promise();
export async function getDoctors() {
const [rows] = await pool.query("SELECT * FROM doctor");
return rows;
}
export async function getAnimals() {
const [rows] = await pool.query("SELECT * FROM animal");
return rows;
}
export async function getKeepers() {
const [rows] = await pool.query("SELECT * FROM keeper");
return rows;
}
 
export async function getEnclosures() {
const [rows] = await pool.query("SELECT * FROM enclosure");
return rows;
}
 
export async function getVaccinations() {
const [rows] = await pool.query("SELECT * FROM vaccination");
return rows;
}
export async function getMedications() {
const [rows] = await pool.query("SELECT * FROM medication");
return rows;
}
export async function getTickets() {
const [rows] = await pool.query("SELECT * FROM ticket");
return rows;
}
export async function getVisitors() {
const [rows] = await pool.query("SELECT * FROM visitor");
return rows;
}
export async function createDoctors(doc_id,doc_name,specialization){
    const result=  await pool.query(`INSERT INTO doctor VALUES 
    (?,?,?)  `,[doc_id,doc_name,specialization])
     console.log("1 row affected")
     return JSON.stringify({message : 'database affected'})
}
export async function createAnimals(animal_id,animal_name,species,age,enclosure_id,keeper_id,doc_id){
    const result=  await pool.query(`INSERT INTO animal VALUES 
    (?,?,?,?,?,?,?)  `,[animal_id,animal_name,species,age,enclosure_id,keeper_id,doc_id])
    console.log("1 row affected")
    return JSON.stringify({message : 'database affected'})
}
export async function createKeepers(keeper_id,keeper_name,contact,age){
    const result=  await pool.query(`INSERT INTO keeper VALUES 
    (?,?,?,?)  `,[keeper_id,keeper_name,contact,age])
    console.log("1 row affected")
    return JSON.stringify({message : 'database affected'})
}
export async function createEnclosures(enclosure_id,enclosure_name,enclosure_type,enclosure_size,enclosure_capacity,keeper_id){
    const result=  await pool.query(`INSERT INTO enclosure VALUES 
    (?,?,?,?,?,?)  `,[enclosure_id,enclosure_name,enclosure_type,enclosure_size,enclosure_capacity,keeper_id])
     console.log("1 row affected")
     return JSON.stringify({message : 'database affected'})
}

export async function createVaccinations(vaccination_id,vaccination_name,doc_id,animal_id,vaccination_date,nextvisit){
    const result=  await pool.query(`INSERT INTO vaccination VALUES 
    (?,?,?,?,?,?)  `,[vaccination_id,vaccination_name,doc_id,animal_id,vaccination_date,nextvisit])
     console.log("1 row affected")
     return JSON.stringify({message : 'database affected'})
}
export async function createMedications(record_id, animal_id , doc_id , treatment , medication_date){
    const result=  await pool.query(`INSERT INTO medication VALUES 
    (?,?,?,?,?)  `,[record_id, animal_id , doc_id , treatment , medication_date])
     console.log("1 row affected")
     return JSON.stringify({message : 'database affected'})
}     

export async function createTickets(ticket_id,price){
    const result=  await pool.query(`INSERT INTO ticket VALUES 
    (?,?)  `,[ticket_id,price])
     console.log("1 row affected")
     return JSON.stringify({message : 'database affected'})
}
export async function createVisitors(visitor_id,visitor_name,contact,ticket_id){
    const result=  await pool.query(`INSERT INTO visitor VALUES 
    (?,?,?,?)  `,[visitor_id,visitor_name,contact,ticket_id])
     console.log("1 row affected")
     return JSON.stringify({message : 'database affected'})
}
export async function deleteKeepers(keeper_id){
    const result = await pool.query(`DELETE FROM keeper WHERE keeper_id = ?`,[keeper_id])
    console.log("1 row deleted")
    return JSON.stringify({message : 'database affected'})
    
}
export async function deleteAnimals(animal_id){
    const result = await pool.query(`DELETE FROM animal WHERE animal_id = ?`,[animal_id])
    console.log("1 row deleted")
    return JSON.stringify({message : 'database affected'})
    
}
export async function deleteMedications(record_id){
    const result = await pool.query(`DELETE FROM medication WHERE record_id = ?`,[record_id])
    console.log("1 row deleted")
    return JSON.stringify({message : 'database affected'})
    
}
export async function deleteTickets(ticket_id){
    const result = await pool.query(`DELETE FROM ticket WHERE ticket_id = ?`,[ticket_id])
    console.log("1 row deleted")
    return JSON.stringify({message : 'database affected'})
    
}
export async function deleteVisitors(visitor_id){
    const result = await pool.query(`DELETE FROM visitor WHERE visitor_id = ?`,[visitor_id])
    console.log("1 row deleted")
    return JSON.stringify({message : 'database affected'})
    
}
export async function deleteVaccinations(vaccination_id){
    const result = await pool.query(`DELETE FROM vaccination WHERE vaccination_id = ?`,[vaccination_id])
    console.log("1 row deleted")
    return JSON.stringify({message : 'database affected'})
    
}
export async function deleteEnclosures(enclosure_id){
    const result = await pool.query(`DELETE FROM enclosure WHERE enclosure_id = ?`,[enclosure_id])
    console.log("1 row deleted")
    return JSON.stringify({message : 'database affected'})
    
}

 

