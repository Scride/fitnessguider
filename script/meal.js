//'use strict';
$(function(){
	$('#mealPlan').hide();
	$.fn.KgToPound = (function(Kg){
		var temp = Kg*2.2;
		return temp;
	});
	$.fn.FatPr= (function(weight, BMRrest){
		var proteinG = weight*0.8;
		var fatG = weight*0.25;
		var proteinCal= proteinG*4;
		var fatCal = fatG*9;
		var carbsCal = BMRrest-(fatCal+proteinCal);
		var carbs = carbsCal/4;
		var Cal = BMRrest;
		Cal = Cal-1000;
		var meat = Cal/500;
		var chicken;
		var steak; 
		var CalShow = fatCal + proteinCal + carbsCal-150;
		if(meat<1){
			chicken = '75g';
			steak = '50g';
		}
		else{
			chicken = 150*meat 
			steak = 100*meat;
		}
		var add1 =  parseFloat(chicken).toFixed(0);
		var add2 = parseFloat(steak).toFixed(0);
		add1+= 'g';
		add2+='g';
		var FatPr_Intake = ['48g',3,2,add1,'48g','125g',1,1,0,add2,0,0, parseFloat(CalShow).toFixed(0), parseFloat(proteinG).toFixed(0), parseFloat(carbs).toFixed(0), parseFloat(fatG).toFixed(0)]

		return FatPr_Intake;
	});
	$.fn.MusPr= (function(weight, BMRrest){
		var proteinG = weight*0.8;
		var fatG = weight*0.25;
		var proteinCal= proteinG*4;
		var fatCal = fatG*9;
		var carbsCal = BMRrest-(fatCal+proteinCal);
		var carbs = carbsCal/4;
		var Cal = BMRrest;
		Cal = Cal-1000;
		var meat = Cal/500;
		var chicken = parseFloat(chicken).toFixed(0);
		var steak; 
		var CalShow = fatCal + proteinCal + carbsCal + 440;
		if(meat<1){
			chicken = '75g';
			steak = '50g';
		}
		else{
			chicken = 150*meat;
			steak = 100*meat;
		}
		fatG+=5;
		proteinG+=40;
		var add1 =  chicken;
		var add2 = parseFloat(steak).toFixed(0);
		add1+='g';
		add2+='g';
		var MusPr_Intake = ['48g',3,'240g',add1,'48g','125g',1,0,0,add2,2,22, parseFloat(CalShow).toFixed(0), parseFloat(proteinG).toFixed(0), parseFloat(carbs).toFixed(0), parseFloat(fatG).toFixed(0)]

		return MusPr_Intake;
	});
		$.fn.MainPr= (function(weight, BMRrest){
		var proteinG = weight*0.8;
		var fatG = weight*0.25;
		var proteinCal= proteinG*4;
		var fatCal = fatG*9;
		var carbsCal = BMRrest-(fatCal+proteinCal);
		var carbs = carbsCal/4;
		var Cal = BMRrest;
		Cal = Cal-1000;
		var meat = Cal/500;
		var chicken;
		var steak; 
		var CalShow = fatCal + proteinCal + carbsCal+50;
		if(meat<1){
			chicken = '75g';
			steak = '50g';
		}
		else{
			chicken = 150*meat;
			steak = 100*meat;
		}
		var add1 =  parseFloat(chicken).toFixed(0);
		var add2 = parseFloat(steak).toFixed(0);
		add1+= 'g';
		add2+='g';
		var MainPr_Intake = ['48g',3,2,add1,'48g','125g',1,1,0,add2,2,0, parseFloat(CalShow).toFixed(0), parseFloat(proteinG).toFixed(0), parseFloat(carbs).toFixed(0), parseFloat(fatG).toFixed(0)]

		return MainPr_Intake;
	});

	$.fn.food = (function(B1, B2, B3, L1, L2, L3, LM1, LM2, LM3, D1, D2, D3){
			$('#B1').html(B1);
			$('#B2').html(B2);
			$('#B3').html(B3);

			$('#L1').html(L1);
			$('#L2').html(L2);
			$('#L3').html(L3);

			$('#LM1').html(LM1);
			$('#LM2').html(LM2);
			$('#LM3').html(LM3);

			$('#D1').html(D1);
			$('#D2').html(D2);
			$('#D3').html(D3);

	});
	$.fn.intake = (function(B1val, B2val, B3val, L1val, L2val, L3val, LM1val, LM2val, LM3val, D1val, D2val, D3val, Cal, P, C, F){
			$('#B1val').html(B1val);
			$('#B2val').html(B2val);
			$('#B3val').html(B3val);

			$('#L1val').html(L1val);
			$('#L2val').html(L2val);
			$('#L3val').html(L3val);

			$('#LM1val').html(LM1val);
			$('#LM2val').html(LM2val);
			$('#LM3val').html(LM3val);

			$('#D1val').html(D1val);
			$('#D2val').html(D2val);
			$('#D3val').html(D3val);
			$('#TotalCal').html(Cal);
			$('#TotalPro').html(P);
			$('#TotalCarbs').html(C);
			$('#TotalFat').html(F);

	});
	$('#CalculateButton').click(function(){
		var weight = $('#weight').val();
		var weight_length = weight.length;
		
		var height = $('#height').val();
		var height_length = height.length;
	
		var gender = $('input[name=gender]:checked').val();

		var age = $('#age').val();
		var age_length = age.length;
		
		var numbers = /^[A-Za-z]+$/
		
		if(weight_length === 0 || weight<=0 || weight.match(numbers)){
			alert("Enter Valid Weight");
		}
		else if(height_length === 0 || height<=0 || height.match(numbers)){
			alert("Enter Valid Height");
		}
		else if(age_length === 0 || age<=0 || age.match(numbers)){
			alert("Enter Valid Age");
		}
		else{
		var BMR_rest;
		var BMR_motion;
		if(gender==='M'){
			BMR_rest = 66.5 + (13.75*weight) + (5.003*height) - (6.755*age);
			BMR_motion = BMR_rest*1.53;
			$('#BMRrest').val(BMR_rest.toFixed(2));
			$('#BMRmotion').val(BMR_motion.toFixed(2));
		}
		else if(gender==='F'){
			BMR_rest = 655.1 +(9.563*weight) + (1.85*height) - (4.676*age);
			BMR_motion = BMR_rest*1.53;
			$('#BMRrest').val(BMR_rest.toFixed(2));
			$('#BMRmotion').val(BMR_motion.toFixed(2));
		}
		else{
			alert("Error");
		}
		}
	});

	$('#FinderButton').click(function(){
		var BMRrest = $('#BMRrest').val();
		var BMRmotion = $('#BMRmotion').val();
		var gender = $('input[name=gender]:checked').val();
		var weight = $('#weight').val();
		var Pound = $.fn.KgToPound(weight); //weight*2.2
		var FatPr = $.fn.FatPr(Pound, BMRrest);
		var MusPr = $.fn.MusPr(Pound, BMRrest);
		var MainPr = $.fn.MainPr(Pound, BMRrest);
		if (BMRrest.length > 0) {
			$('#mealPlan').show(1000);
		
			var goal = $('input[name=goal]:checked').val();
			if(goal === 'fat'){
				if(BMRrest<1000){
					$('#mealPlan').food('Oatmeal', 'Eggs', 'Apple', 'Chicken', 'Br. Rice', 'Vegetables', 'Protein bar', 'Yogurt', 'none', 'Steak', 'Sweet Potatoes', 'none');
					$('.value').intake('40g', 0, 1, '50g', '100g', '75g', 0, 1, 0, '100g', 1, 0);
				}
				else{
					$('#mealPlan').food('Oatmeal', 'Eggs', 'Apple', 'Chicken', 'Br. Rice', 'Vegetables', 'Protein bar', 'Yogurt', 'none', 'Steak', 'Sweet Potatoes', 'none');
					$('.value').intake(FatPr[0],FatPr[1],FatPr[2],FatPr[3],FatPr[4],FatPr[5],FatPr[6],FatPr[7],FatPr[8],FatPr[9],FatPr[10],FatPr[11],FatPr[12],FatPr[13],FatPr[14],FatPr[15],FatPr[16]);
				}
			}
			else if(goal === 'muscle'){
				$('#mealPlan').food('Oatmeal', 'Egg Whites', 'Blueberries', 'Chicken', 'White Rice', 'Vegetables', 'Protein bar', 'Protein shake', 'none', 'Steak', 'Sweet Potatos', 'Almonds');
				$('.value').intake(MusPr[0],MusPr[1],MusPr[2],MusPr[3],MusPr[4],MusPr[5],MusPr[6],MusPr[7],MusPr[8],MusPr[9],MusPr[10],MusPr[11],MusPr[12],MusPr[13],MusPr[14],MusPr[15],MusPr[16]);
			}
			else if(goal === 'maintain'){
				console.log("maintain");
				$('#mealPlan').food('Oatmeal', 'Eggs', 'Apple', 'Chicken', 'Br. Rice', 'Vegetables', 'Protein bar', 'Yogurt', 'none', 'Steak', 'Sweet Potatoes', 'none');
				$('.value').intake(MainPr[0],MainPr[1],MainPr[2],MainPr[3],MainPr[4],MainPr[5],MainPr[6],MainPr[7],MainPr[8],MainPr[9],MainPr[10],MainPr[11],MainPr[12],MainPr[13],MainPr[14],MainPr[15],MainPr[16]);
			}
			else{
				console.log("ErrorTakingPlan");
			}
		}
		else{
			alert("First Calculate Your BMR");
		}
	});

});
