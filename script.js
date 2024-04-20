// 将函数等组织到一个模块或类中以提高可维护性
class TxTest {
    constructor() {
        this.inputs = {
            // 初始化为null以方便后续验证
            mode: null,
            bandwidth: null,
            // ...其他输入字段
        };
    }

    // 重构输入收集并添加基本验证
    validateAndCollectInputs() {
        this.inputs.mode = this.validateInput('modeSelect', 'Please select a mode.');
        // ...对其他输入执行类似操作

        // 如果任何一个输入验证失败，则停止执行
        if (Object.values(this.inputs).some(v => v === false)) return false;

        return true;
    }

    validateInput(id, errorMessage) {
        const element = document.getElementById(id);
        if (!element || !element.value) {
            console.error(errorMessage); // 在实际应用中，应该考虑更安全的日志记录方式
            return false;
        }
        // 这里可以添加更具体的验证逻辑，例如检查输入值的范围或格式
        return element.value;
    }

    startTx() {
        if (!this.validateAndCollectInputs()) return;

        // 获取各输入项的值
        const mode = document.getElementById('modeSelect').value;
        const bandwidth = document.getElementById('bandwidthSelect').value;
        const rate = document.getElementById('Rate').value;
        const channel = document.getElementById('channelInput').value;
        const gi = document.getElementById('giSelect').value;
        const ltf = document.getElementById('ltfSelect').value;
        const packetLength = document.getElementById('packetLengthInput').value;
        const antenna = document.getElementById('antennaInput').value;
        const transmissionMode = document.getElementById('transmissionModeSelect').value;
        const power = document.getElementById('powerInput').value;
        const gain = document.getElementById('gainInput').value;
        const powerOffset = document.getElementById('PowerOffset').value;
        const frequencyOffset = document.getElementById('frequencyOffsetInput').value;


        // 在这里执行 TX Start 相关的操作，使用上述变量
        // 例如，可以将这些变量传递给 Electron 主进程，执行相应的操作
        console.log("Start TX with the following parameters:");
        console.log("Mode:", mode);
        console.log("Bandwidth:", bandwidth);
        console.log("Rate:", rate);
        console.log("Channel:", channel);
        console.log("GI:", gi);
        console.log("LTF:", ltf);
        console.log("Packet Length:", packetLength);
        console.log("Antenna:", antenna);
        console.log("Transmission Mode:", transmissionMode);
        console.log("Power:", power);
        console.log("Gain:", gain);
        console.log("Power Offset:", powerOffset);
        console.log("Frequency Offset:", frequencyOffset);
    }

    // 显示 TX Test 页面，隐藏 RX Test 页面
    showTxTestPage() {
        const txTestPage = document.getElementById('txTestPage');
        const rxTestPage = document.getElementById('rxTestPage');

        txTestPage.style.display = 'block';
        rxTestPage.style.display = 'none';
    }
    showRxTestPage() {
        const txTestPage = document.getElementById('txTestPage');
        const rxTestPage = document.getElementById('rxTestPage');

        txTestPage.style.display = 'none';
        rxTestPage.style.display = 'block';
    }

    TxStop() {
        console.log("TxStop");
    }
}

// 实例化并挂载到全局作用域以方便访问
window.TxTest = new TxTest();

// 初始化显示 TX Test 页面
document.addEventListener('DOMContentLoaded', function () {
    window.TxTest.showTxTestPage();
});
