//สวัสดิการ
var salary = 310;
var ot15 = (salary/8)*1.5
var ot2 = (salary/8)*2
var ot3 = (salary/8)*3
var food =20
var food15 = 20
var food2 = 20
var food3 =10
var foodNshift = 10
var nshift = 60
var perfDay = 20 //เบี้ยขยันรายวัน
var perfHDay = 10 //เบี้ยขยันวันหยุด
var morning = 100
var perfMonth = 500 //เบี้ยขยันรายเดือน

function calc(){
    //ค่าจ้างรายวัน
    var wday = document.getElementById('dWork').value
    var cal1 = document.getElementById('res1').innerHTML = wday * salary

    //นักขัตฤกษ์
    var shDay = document.getElementById('shWork').value
    var cal2 =document.getElementById('res2').innerHTML = shDay * salary

    //เบี้ยขยันรายเดือน
    var cal3 =document.getElementById('res3').innerHTML = 0

    //OT 1.5
    var cal4 =document.getElementById('res4').innerHTML = wday * (ot15 * 3 )

    //OT 2
    var hDay = document.getElementById('hWork').value
    var cal5 =document.getElementById('res5').innerHTML = hDay * (ot2 * 8)

    //OT 3
    var cal6 =document.getElementById('res6').innerHTML = hDay *(ot3 *3)

    //ค่าอาหารวันปกติ
    var cal7 =document.getElementById('res7').innerHTML = wday * food

    //ค่าอาหาร OT 1.5
    var cal8 =document.getElementById('res8').innerHTML = wday * food15

    //ค่าอาหาร OT 3
    var cal9 =document.getElementById('res9').innerHTML = hDay * food3

    //เบี้ยขยันวันปกติ
    var cal10 =document.getElementById('res10').innerHTML = wday * perfDay

    document.getElementById('total').innerHTML = (cal1+cal2+cal3+cal4+cal5+cal6+cal7+cal8+cal9+cal10)
    
}