<script>
    import { onMount } from 'svelte';
    import JsBarcode from 'jsbarcode';
    import QRCode from 'qrcode-svg';

    let codeInput = '';
    let codeFormat = 'CODE128';
    let barcodeElement;
    let qrCodeElement;
  
    function generateCode() {
      if (codeInput) {
        if (codeFormat === 'QR') {
          if (qrCodeElement) {
            const qr = new QRCode({
              content: codeInput,
              width: 256,
              height: 256,
            });
            qrCodeElement.innerHTML = qr.svg();
          }
          if (barcodeElement) {
            barcodeElement.innerHTML = '';
          }
        } else {
          if (barcodeElement) {
            try {
              JsBarcode(barcodeElement, codeInput, {
                format: codeFormat,
                width: 2,
                height: 100,
                displayValue: true
              });
            } catch (error) {
              console.error('Barcode generation error:', error);
              barcodeElement.innerHTML = `<text x="0" y="20" fill="red">Invalid input for ${codeFormat}</text>`;
            }
          }
          if (qrCodeElement) {
            qrCodeElement.innerHTML = '';
          }
        }
      } else {
        if (barcodeElement) {
          barcodeElement.innerHTML = '';
        }
        if (qrCodeElement) {
          qrCodeElement.innerHTML = '';
        }
      }
    }

    function downloadImage() {
        let svg = codeFormat === 'QR' ? qrCodeElement.querySelector('svg') : barcodeElement;
        
        if (svg) {
            const svgData = new XMLSerializer().serializeToString(svg);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const pngFile = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.download = `${codeFormat}_code.png`;
                downloadLink.href = pngFile;
                downloadLink.click();
            };
            img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
        }
    }
  
    $: if (codeInput || codeFormat) generateCode();
  
    onMount(() => {generateCode();});
</script>

<svelte:head>
    <title>Real-time Code Generator</title>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>
</svelte:head>

<div class="container">
    <h1>QR & Barcode Generator</h1>

    <input class="w100" type="text" bind:value={codeInput} placeholder="Enter code data">

    <select class="w100" bind:value={codeFormat}>
        <option value="CODE128">CODE128 (Most Common)</option>
        <option value="CODE39">CODE39</option>
        <option value="EAN13">EAN-13</option>
        <option value="UPC">UPC</option>
        <option value="QR">QR Code</option>
    </select>

    <button class="w100" on:click={downloadImage} disabled={!codeInput}>Download Image</button>
    <p class:hidden={codeFormat !== 'EAN13'}>Requirement: 12 or 13 numbers</p>
    <p class:hidden={codeFormat !== 'UPC'}>Requirement: 11 or 12 numbers</p>
    <p class:hidden={codeFormat !== 'CODE39'}>Requirement: Only uppercase letters (A-Z), digits (0-9), and some special characters</p>

    <div class="code">
      <svg class:hidden={codeFormat === 'QR' || !codeInput} bind:this={barcodeElement}></svg>
      <div class:hidden={codeFormat !== 'QR' || !codeInput} bind:this={qrCodeElement}></div>
    </div>
</div>

<style>
    :global(body) {
        background-color: white;
    }
    .container{
        max-width: 30rem;
        margin-left: auto;
        margin-right: auto;
        padding: 1rem;
    }
    .code{
        margin-left: auto;
        margin-right: auto;
        width:fit-content;
    }
    h1, button{
        margin-bottom: 1rem;
        text-align: center;
    }
    button, input, select{
        font-family: 'ClashDisplay-Variable';
        font-weight: 500;
    }
</style>