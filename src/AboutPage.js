import { useSearchParams } from "react-router-dom";

function AboutPage(){
const [params] = useSearchParams()
console.log(params)
    return(
        <div>
o nas
{params.get("test")}

        </div>
    
    )
}

export default AboutPage;