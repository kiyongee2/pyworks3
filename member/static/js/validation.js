// 회원가입 유효성 검사
function checkMember(){
    let form = document.regForm;
    let id = form.memberid;

    if(id.value.length < 4 || id.value.length > 15){
        alert("아이디는 4~15자까지 입력 가능합니다.");
        id.select();
        return false;
    }


}