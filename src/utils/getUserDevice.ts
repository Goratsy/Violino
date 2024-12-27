export const getOSInfo = () => {
    const { userAgent, platform } = window.navigator;
    let os = "Unknown OS";
    let version = "Unknown Version";

    // Определение Windows
    if (/Windows NT/.test(userAgent)) {
        os = "Windows";
        const versionMatch = /Windows NT (\d+\.\d+)/.exec(userAgent);
        const versionsMap: Record<string, string> = {
            "10.0": "10",
            "6.3": "8.1",
            "6.2": "8",
            "6.1": "7",
            "6.0": "Vista",
            "5.1": "XP",
            "5.0": "2000",
        };

        if (versionMatch && versionMatch[1]) {
            version = versionsMap[versionMatch[1]] ?? versionMatch[1];
        }
    }
    // Определение macOS
    else if (/Mac/.test(platform)) {
        os = "macOS";
        const versionMatch = /Mac OS X (\d+[\._]\d+)/.exec(userAgent);
        if (versionMatch) {
            version = versionMatch[1].replace("_", ".");
        }
    }
    // Определение iOS
    else if (/iPhone|iPad|iPod/.test(platform)) {
        os = "iOS";
        const versionMatch = /OS (\d+_\d+)/.exec(userAgent);
        if (versionMatch) {
            version = versionMatch[1].replace("_", ".");
        }
    }
    // Определение Android
    else if (/Android/.test(userAgent)) {
        os = "Android";
        const versionMatch = /Android (\d+\.\d+)/.exec(userAgent);
        if (versionMatch) {
            version = versionMatch[1];
        }
    }
    // Определение Linux
    else if (/Linux/.test(platform)) {
        os = "Linux";
        // Версии для Linux в userAgent обычно не указаны
    }

    return `${os} ${version}`;
};

