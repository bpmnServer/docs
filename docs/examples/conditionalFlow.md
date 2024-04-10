# Conditional Flow


![Using Modeler](../images/bb-conditional-flow.PNG){align=left}


```xml

  <bpmn:sequenceFlow>    

   <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression" language="JavaScript">
      (data.needsCleaning=="Yes")
   </bpmn:conditionExpression>
  ..

```

<div style="clear:both"></div>
