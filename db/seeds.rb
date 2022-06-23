puts "🌱 seeding"

# patients
p1 = Patient.create(name: 'test1', username: 'test1', password: 'test1', avatar: 'test1', image: 'test1', points: 100, level: 1)
p2 = Patient.create(name: 'test2', username: 'test2', password: 'test2', avatar: 'test2', image: 'test2', points: 200, level: 2)
p3 = Patient.create(name: 'test3', username: 'test3', password: 'test3', avatar: 'test3', image: 'test3', points: 300, level: 3)
p4 = Patient.create(name: 'test4', username: 'test4', password: 'test4', avatar: 'test4', image: 'test4', points: 400, level: 4)
p5 = Patient.create(name: 'test5', username: 'test5', password: 'test5', avatar: 'test5', image: 'test5', points: 500, level: 5)
p6 = Patient.create(name: 'test6', username: 'test6', password: 'test6', avatar: 'test6', image: 'test6', points: 600, level: 6)

# doctors
d1 = Doctor.create(name: 'doc1', location: 'test1', phone: 'test1', email: 'test1')
d2 = Doctor.create(name: 'doc2', location: 'test2', phone: 'test2', email: 'test2')
d3 = Doctor.create(name: 'doc3', location: 'test3', phone: 'test3', email: 'test3')
d4 = Doctor.create(name: 'doc4', location: 'test4', phone: 'test4', email: 'test4')
d5 = Doctor.create(name: 'doc5', location: 'test5', phone: 'test5', email: 'test5')
d6 = Doctor.create(name: 'doc6', location: 'test6', phone: 'test6', email: 'test6')
d7 = Doctor.create(name: 'doc7', location: 'test7', phone: 'test7', email: 'test7')

# medications
m1 = Medication.create(name: 'test1', dosage: '1', frequency: '1', instructions: 'test1', initial_amount: 1, remaining:10, fill_date: '2022/05/20', refill_date: '2022/05/22', patient_id: p1.id, doctor_id: d1.id)
m2 = Medication.create(name: 'test2', dosage: '2', frequency: '2', instructions: 'test2', initial_amount: 2, remaining:10, fill_date: '2022/05/20', refill_date: '2022/05/22', patient_id: p2.id, doctor_id: d2.id)
m3 = Medication.create(name: 'test3', dosage: '3', frequency: '3', instructions: 'test3', initial_amount: 3, remaining:10, fill_date: '2022/05/20', refill_date: '2022/05/22', patient_id: p3.id, doctor_id: d3.id)
m4 = Medication.create(name: 'test4', dosage: '4', frequency: '4', instructions: 'test4', initial_amount: 4, remaining:10, fill_date: '2022/05/20', refill_date: '2022/05/22', patient_id: p4.id, doctor_id: d4.id)
m5 = Medication.create(name: 'test5', dosage: '5', frequency: '5', instructions: 'test5', initial_amount: 5, remaining:10, fill_date: '2022/05/20', refill_date: '2022/05/22', patient_id: p5.id, doctor_id: d5.id)
m6 = Medication.create(name: 'test6', dosage: '6', frequency: '6', instructions: 'test6', initial_amount: 6, remaining:10, fill_date: '2022/05/20', refill_date: '2022/05/22', patient_id: p6.id, doctor_id: d6.id)
m7 = Medication.create(name: 'test7', dosage: '7', frequency: '7', instructions: 'test7', initial_amount: 7, remaining:10, fill_date: '2022/05/20', refill_date: '2022/05/22', patient_id: p6.id, doctor_id: d7.id)

puts "Seeding completed successfully 🌱"