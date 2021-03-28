let diameter = 0
let radius = 0
let area = 0
let circumference = 0

document.getElementById('submit').addEventListener('click', calculate)

function calculate () {
  diameter = document.getElementById('diameter').value
  radius = diameter / 2
  area = Math.PI * radius * radius
  circumference = Math.PI * diameter
  document.getElementById('area').innerHTML = area
  document.getElementById('circumference').innerHTML = circumference
}
