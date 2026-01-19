type Pair = [number, number];

function gcd(m:number, n:number):number{
    if (m < n)return gcd(n, m); 
    var r=m%n;
    if (r==0)return n;
    return gcd(n,r);
}

function lcm(a:number, b:number):number{
    return a*b/gcd(a,b);
}

function isNaN_array(array:any[]):boolean{
    return array.filter((v:any)=>{return Number.isNaN(v);}).length>0;
}

//return a,b=1固定
// a/b
function make_fraction_body(body:number[],base:number):Pair{

    body=body.reverse();

    let a_up=0;
    for (const [i, v] of body.entries()) {
        a_up+=Math.pow(base,i)*v;
    }
    let a_down=Math.pow(base,body.length)-1;
    let a_temp1=gcd(a_up,a_down);
    a_up/=a_temp1;
    a_down/=a_temp1;
    return [a_up,a_down];
}

//ヘッダー部
function make_fraction_head(head:number[],base:number):Pair{
    head=head.reverse();
    let a_up=0;
    for (const [i, v] of head.entries()) {
        a_up+=v*Math.pow(base,i);
    }
    if(a_up==0){
        return [0,0];
    }
    let a_down=Math.pow(base,head.length);
    let a_temp1=gcd(a_up,a_down);
    a_up/=a_temp1;
    a_down/=a_temp1;
    return [a_up,a_down];
}

function assertValidDigits(
  array: number[],
  name: string
): asserts array is number[] {
  if (isNaN_array(array)) {
    throw new Error(`${name}は指定した進数の数値を入力してください。`);
  }
}

function check_parameter(head:string,body:string,base:number): asserts base is number{
  if (!(2 <= base && base <= 36)) {
    throw new Error("進数は2から36まで指定可能です。");
  }

  const pattern = /^[0-9a-zA-Z]+$/;

  if (!pattern.test(head)) {
    throw new Error("headは英数値しか入力出来ません。");
  }

  if (!pattern.test(body)) {
    throw new Error("bodyは英数値しか入力出来ません。");
  }
}

export interface Fraction {
	numerator: number;
	denominator: number;
}

export interface Repeating_decimal {
	integer:number;
	leading_decimal: string;
	repeating_decimal: string;
}

export function make_fraction(v:Repeating_decimal,base:number):Fraction{
    const head=v.leading_decimal;
    const body=v.repeating_decimal;

    check_parameter(head, body, base);

    const head_array: number[] = head.split('').map(v => parseInt(v, base));
    const body_array: number[] = body.split('').map(v => parseInt(v, base));

    assertValidDigits(head_array, "head");
    assertValidDigits(body_array, "body");

    let head_result=make_fraction_head(head_array,base);
    let body_result=make_fraction_body(body_array,base);
    body_result[1]*=Math.pow(base,body_array.length);
    let result:Pair=[0,0];
    if(head_result[0]!=0){
        let result_temp1=lcm(head_result[1],body_result[1]);
        head_result[0]*=result_temp1/head_result[1];
        head_result[1]=result_temp1;
        body_result[0]*=result_temp1/body_result[1];
        body_result[1]=result_temp1;
        result=[(head_result[0]+body_result[0]),head_result[1]];
    }else{
        result=body_result;
    }

    result[0]+=result[1]*v.integer;

    let result_temp2=gcd(result[0],result[1]);
    result[0]/=result_temp2;
    result[1]/=result_temp2;
    return {
	numerator:result[0],
	denominator:result[1] 
    }
}

