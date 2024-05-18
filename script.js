document.getElementById('readNfcButton').addEventListener('click', () => {
        if ('NDEFReader' in window) {
                const reader = new NDEFReader();
                        
                                reader.scan().then(() => {
                                            console.log("Scan started successfully.");
                                                        reader.onreading = event => {
                                                                        const ndefMessage = event.message;
                                                                                        const nfcContentDiv = document.getElementById('nfcContent');
                                                                                                        nfcContentDiv.innerHTML = '';

                                                                                                                        ndefMessage.records.forEach(record => {
                                                                                                                                            let textDecoder = new TextDecoder(record.encoding);
                                                                                                                                                                let text = textDecoder.decode(record.data);
                                                                                                                                                                                    nfcContentDiv.innerHTML += `<p>${text}</p>`;
                                                                                                                                                                                                    });
                                                                                                                                                                                                                };
                                                                                                                                                                                                                        }).catch(error => {
                                                                                                                                                                                                                                    console.error(`Error! Scan failed to start: ${error}.`);
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                        alert('NFC não é suportado por este dispositivo.');
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                            });
