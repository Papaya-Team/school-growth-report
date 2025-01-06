const mathES = [
  { id: 222, name: 'Soto, Aliyah', ttms: 1.3, et_hrs: 7.92, lost_time: 2.25, total_time: 10.17, percentage: '80.00%', diagnostic_grade: '2 grades behind', total_mastered: 6 },
  { id: 224, name: 'Woytasczyk, Steve', ttms: 2.6, et_hrs: 7.75, lost_time: 1.5, total_time: 9.25, percentage: '86.67%', diagnostic_grade: '1 grade behind', total_mastered: 3 },
  { id: 223, name: 'Vasquez, Diego', ttms: 1.1, et_hrs: 7.5, lost_time: 2.25, total_time: 9.75, percentage: '80.00%', diagnostic_grade: '3 grades behind', total_mastered: 7 },
  { id: 225, name: 'Zapata, Samantha', ttms: 9.3, et_hrs: 9.25, lost_time: 1.5, total_time: 10.75, percentage: '86.67%', diagnostic_grade: '2 grades behind', total_mastered: 0 },
  { id: 219, name: 'Barrera, Carlos', ttms: 1.1, et_hrs: 8.83, lost_time: 1.5, total_time: 10.33, percentage: '85.71%', diagnostic_grade: '3 grades behind', total_mastered: 8 },
  { id: 220, name: 'Gonzales, Jeniah', ttms: 2.0, et_hrs: 3.92, lost_time: 1.25, total_time: 5.17, percentage: '85.71%', diagnostic_grade: '3 grades behind', total_mastered: 2 },
  { id: 221, name: 'Rodriguez, Asia', ttms: 0.8, et_hrs: 8.17, lost_time: 2.25, total_time: 10.42, percentage: '80.00%', diagnostic_grade: '3 grades behind', total_mastered: 10 },
  { id: 229, name: 'Gonzalez, Zerrick', ttms: 0.6, et_hrs: 9.67, lost_time: 1.5, total_time: 11.17, percentage: '86.67%', diagnostic_grade: '2 grades behind', total_mastered: 15 },
  { id: 230, name: 'Hernandez, Jaelyn', ttms: 1.7, et_hrs: 3.33, lost_time: 6.75, total_time: 10.08, percentage: '30.77%', diagnostic_grade: '2 grades behind', total_mastered: 2 },
  { id: 231, name: 'Rodriguez, Zoe', ttms: 0.8, et_hrs: 8.58, lost_time: 1.5, total_time: 10.08, percentage: '86.67%', diagnostic_grade: '2 grades behind', total_mastered: 11 },
  { id: 232, name: 'Talamantes, Delilah', ttms: 1.2, et_hrs: 8.58, lost_time: 2.25, total_time: 10.83, percentage: '80.00%', diagnostic_grade: '3 grades behind', total_mastered: 7 },
  { id: 226, name: 'Aguillon, Destiny', ttms: 1.2, et_hrs: 8.58, lost_time: 1.5, total_time: 10.08, percentage: '86.67%', diagnostic_grade: '2 grades behind', total_mastered: 7 },
  { id: 227, name: 'Arevalo, Kaydran', ttms: 1.6, et_hrs: 6.42, lost_time: 4.5, total_time: 10.92, percentage: '60.00%', diagnostic_grade: '2 grades behind', total_mastered: 4 },
  { id: 228, name: 'Fonseca, Riddick', ttms: 1.3, et_hrs: 8.75, lost_time: 2.25, total_time: 11.0, percentage: '80.00%', diagnostic_grade: '2 grades behind', total_mastered: 7 }
];


const elaES = [
  { id: 236, name: 'Franklin, Aubrey', ttms: 2.4, et_hrs: 9.75, lost_time: 1.5, total_time: 11.25, percentage: '86.67%', diagnostic_grade: 'Current Grade', total_mastered: 4 },
  { id: 237, name: 'Lopez, Arianny', ttms: 1.1, et_hrs: 6.5, lost_time: 2.5, total_time: 9.0, percentage: '83.33%', diagnostic_grade: '2 grades behind', total_mastered: 6 },
  { id: 234, name: 'Castillo, William', ttms: 1.6, et_hrs: 7.75, lost_time: 3.25, total_time: 11.0, percentage: '73.33%', diagnostic_grade: 'Current Grade', total_mastered: 5 },
  { id: 233, name: 'Brozak, Jayce', ttms: 1.1, et_hrs: 8.92, lost_time: 2.33, total_time: 11.25, percentage: '86.67%', diagnostic_grade: '2 grades behind', total_mastered: 8 },
  { id: 220, name: 'Gonzales, Jeniah', ttms: 4.0, et_hrs: 4.0, lost_time: 2.0, total_time: 6.0, percentage: '85.71%', diagnostic_grade: '2 grades behind', total_mastered: 1 },
  { id: 238, name: 'Marrero, Amoni', ttms: 1.9, et_hrs: 5.58, lost_time: 5.67, total_time: 11.25, percentage: '53.33%', diagnostic_grade: '2 grades behind', total_mastered: 3 },
  { id: 240, name: 'Vinton, Avery', ttms: 1.2, et_hrs: 9.33, lost_time: 1.92, total_time: 11.25, percentage: '86.67%', diagnostic_grade: '2 grades behind', total_mastered: 8 },
  { id: 235, name: 'Chavera, Jesus', ttms: 1.0, et_hrs: 7.17, lost_time: 4.08, total_time: 11.25, percentage: '80.00%', diagnostic_grade: '2 grades behind', total_mastered: 7 },
  { id: 239, name: 'Rodriguez, Heriberto', ttms: 1.3, et_hrs: 9.33, lost_time: 1.92, total_time: 11.25, percentage: '86.67%', diagnostic_grade: '1 grade behind', total_mastered: 7 },
  { id: 359, name: 'Rodriguez, Ariana', ttms: 1.5, et_hrs: 1.5, lost_time: 1.5, total_time: 3.0, percentage: '50.00%', diagnostic_grade: 'Current Grade', total_mastered: 0 },
  { id: 245, name: 'Rodriguez, Johnny', ttms: 0.9, et_hrs: 8.17, lost_time: 2.33, total_time: 10.5, percentage: '78.57%', diagnostic_grade: '1 grade behind', total_mastered: 9 },
  { id: 241, name: 'Aranda, Brisa', ttms: 1.3, et_hrs: 7.58, lost_time: 3.67, total_time: 11.25, percentage: '73.33%', diagnostic_grade: 'Current Grade', total_mastered: 6 },
  { id: 243, name: 'Lopez, Kaitlynn', ttms: 1.4, et_hrs: 8.17, lost_time: 3.08, total_time: 11.25, percentage: '80.00%', diagnostic_grade: 'Current Grade', total_mastered: 6 },
  { id: 242, name: 'Baldwin, Alice', ttms: 1.1, et_hrs: 8.75, lost_time: 2.5, total_time: 11.25, percentage: '86.67%', diagnostic_grade: 'Current Grade', total_mastered: 8 }
];
