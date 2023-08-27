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
   if(year%100==0 && year%400!=0)
   {
    return false;
   }
}

export default esBisiesto;