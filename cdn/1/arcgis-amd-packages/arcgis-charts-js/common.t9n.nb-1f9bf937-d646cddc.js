define(["exports"],(function(e){"use strict";const t={mean:"Gjennomsnitt",median:"Median",sum:"Sum",discretePercentitle:"Diskret persentil",minimum:"Minimum",maximum:"Maksimum",variance:"Varians",count:"Antall",aggregation:"${ statistics } av ${ fieldName }",noAggregation:"Ingen sammenslåing"},i="Diagram",a="Tallserie",n="X-akse",s="Ikke tilgjengelig",g={start:"Fest til det første datapunktet",end:"Fest til det siste datapunktet"},l="Ingen data er tilgjengelige for visning på grunn av tomme datafelt og/eller kombinasjon av filtre.";var m={statistics:t,defaultTitle:i,countSeries:a,xAxis:n,notAvailable:s,timeAggregationTypes:g,noDataMessage:l};e.countSeries=a,e.default=m,e.defaultTitle=i,e.noDataMessage=l,e.notAvailable=s,e.statistics=t,e.timeAggregationTypes=g,e.xAxis=n}));