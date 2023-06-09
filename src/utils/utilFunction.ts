import { IUser } from "./interface";

export const confirmPassword = (value:string) => {
  // a password must have at least one lowercase letter, one uppercase letter, one digit, and one special character (like !, @, #, $, %, ^, &, *), and it must be at least 8 characters long.
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  
    // a password must have at least 6 characters and must meet one of the following criteria:
    // It must have at least one lowercase letter and one uppercase letter
    // OR it must have at least one lowercase letter and one digit
    // OR it must have at least one uppercase letter and one digit
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  
    if(strongRegex.test(value)){
        return "strong"
    }else if(mediumRegex.test(value)){
        return "medium"
    }else if(value===""){
        return "empty"
    }else{
      return "weak"
    }
  
    }
  
  
    export const checkForError = (
      inputInfo:any,
      excludeInput:string[]
      ) =>{
      let value:keyof typeof inputInfo
        let arr:string[]=[]
      for( value in inputInfo){
        let str = inputInfo[value]
      if(str==="" && !excludeInput.includes(value)){

          arr.push(value)
        }
      }
        return arr
    }

    export function numberWithCommas(num?: number | string) {
      if(num){
          var parts = num.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
      }else return ""
    
    }

   

    export function diffInYears(date1:Date):{color:string,text:string} {
      date1 = new Date(date1)
      const year1 = new Date(date1).getFullYear();
      const date2 =new Date();
      const year2 =new Date().getFullYear();
      const diff = year1 - year2;
      const styleStatus = {
        color:"",
        text:""
      }
      // Check if the dates are in different months
      if (date2.getMonth() < date1.getMonth()) {
       diff - 1;
      }
    
      // Check if the dates are in the same month, but different days
      if (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate()) {
       diff - 1;
      }
      const absDifference = Math.abs(diff); 
      if (diff > 0 || absDifference < 5) { 
        styleStatus.text="active"
        styleStatus.color="#39CD62" 
      } else if (absDifference < 10) {
        styleStatus.text="Pending"
        styleStatus.color="#E9B200"
      } else if (absDifference < 20) { 
        styleStatus.text="Inactive"
        styleStatus.color="#545F7D"
       } else { 
        styleStatus.text="Blacklisted"
        styleStatus.color="#E4033B"
       } 
      
      return styleStatus;

    }
;

    export function formatDate(dateString:string) {
      const date = new Date(dateString);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const year = date.getFullYear();
      const month = months[date.getMonth()];
      const day = date.getDate()< 10 ? `0${date.getDate()}` : date.getDate();;
      const hours = date.getHours();
      
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      return `${month} ${day}, ${year} ${formattedHours}:${formattedMinutes} ${ampm}`;
    }
    
 // Output: Nov 10, 2079 11:17 PM


export function searchArray(userArray:IUser[], searchString:string) {
  const searchUsers = userArray.filter((user:IUser)=>user.userName.toLowerCase().includes(searchString.toLowerCase()))
  return searchUsers
}
