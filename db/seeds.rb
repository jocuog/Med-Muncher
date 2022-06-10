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
m1 = Medication.create(name: 'test1', dosage: 'test1', frequency: 'test1', instructions: 'test1', count: 1, fill_date: '2022/05/20', refill_date: '2022/05/22', refills: 3, taken: false, patient_id: p1.id, doctor_id: d1.id)
m2 = Medication.create(name: 'test2', dosage: 'test2', frequency: 'test2', instructions: 'test2', count: 2, fill_date: '2022/05/20', refill_date: '2022/05/22', refills: 3, taken: false, patient_id: p2.id, doctor_id: d2.id)
m3 = Medication.create(name: 'test3', dosage: 'test3', frequency: 'test3', instructions: 'test3', count: 3, fill_date: '2022/05/20', refill_date: '2022/05/22', refills: 3, taken: false, patient_id: p3.id, doctor_id: d3.id)
m4 = Medication.create(name: 'test4', dosage: 'test4', frequency: 'test4', instructions: 'test4', count: 4, fill_date: '2022/05/20', refill_date: '2022/05/22', refills: 3, taken: false, patient_id: p4.id, doctor_id: d4.id)
m5 = Medication.create(name: 'test5', dosage: 'test5', frequency: 'test5', instructions: 'test5', count: 5, fill_date: '2022/05/20', refill_date: '2022/05/22', refills: 3, taken: false, patient_id: p5.id, doctor_id: d5.id)
m6 = Medication.create(name: 'test6', dosage: 'test6', frequency: 'test6', instructions: 'test6', count: 6, fill_date: '2022/05/20', refill_date: '2022/05/22', refills: 3, taken: false, patient_id: p6.id, doctor_id: d6.id)
m7 = Medication.create(name: 'test7', dosage: 'test7', frequency: 'test7', instructions: 'test7', count: 7, fill_date: '2022/05/20', refill_date: '2022/05/22', refills: 3, taken: false, patient_id: p6.id, doctor_id: d7.id)

puts "Seeding completed successfully 🌱"