export const getColor = name => {
     switch (name) {
        case "good":
             return "#00c83c";
         
        case "neutral":
             return "#83a7ef"
         
        case "bad":
             return "#fb6868"
         
         default: 
             return "silver"
     }
    }