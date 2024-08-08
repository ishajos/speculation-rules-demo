---
let isSupported = false;
if(globalThis.window){
  isSupported = HTMLScriptElement.supports('speculationrules');
  console.log('isSupported', isSupported)
}
---
<div>
  <script>

  </script>
  <h2>Predictive Prerendering Stats</h2>

  <table>
    <tr>
      <td>Is Supported</td>
      <td>{isSupported.toString()}</td>
    </tr>
  </table>
</div>
