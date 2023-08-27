function esBisiesto(year)
{
    if(year==4)
    {
        return true;
    }
   if(year%400==0)
   {
    return true;
   }
   
}

export default esBisiesto;