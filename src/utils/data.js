// Initial performance data
export const initialPerformanceData = [
    {
        id: 1,
        name: "UserAuthentication",
        before: 2.85,
        after: 1.2,
        unit: "seconds"
    },
    {
        id: 2,
        name: "FetchUserProfile",
        before: 18.4,
        after: 5.3,
        unit: "seconds"
    },
    {
        id: 3,
        name: "ListAllBookings",
        before: 25.7,
        after: 8.9,
        unit: "seconds"
    },
    {
        id: 4,
        name: "GlobalSearch",
        before: 943,
        after: 275,
        unit: "milliseconds"
    },
    {
        id: 5,
        name: "ComplexQuery",
        before: 320,
        after: 410,
        unit: "milliseconds"
    },
    {
        id: 6,
        name: "ImageProcessing",
        before: 4.2,
        after: 1.7,
        unit: "seconds"
    }
];

// Calculate summary statistics
export const calculateSummaryStats = (performanceData) => {
    // Calculate average improvement percentage
    let totalImprovement = 0;
    let positiveCount = 0;
    performanceData.forEach(item => {
        const improvementPercent = ((item.before - item.after) / item.before * 100);
        // Only include positive improvements in the average
        if (improvementPercent > 0) {
            totalImprovement += improvementPercent;
            positiveCount++;
        }
    });
    // If no positive improvements, use all data points
    const divisor = positiveCount > 0 ? positiveCount : performanceData.length;
    const avgImprovement = (totalImprovement / divisor).toFixed(1);

    // Count unique optimized APIs (by name)
    const uniqueAPIs = new Set();
    performanceData.forEach(item => uniqueAPIs.add(item.name));
    const apiCount = uniqueAPIs.size;

    // Calculate total time saved (respecting units)
    let totalTimeSavedSeconds = 0;
    performanceData.forEach(item => {
        const timeDiff = item.before - item.after;
        // Only include positive time savings
        if (timeDiff > 0) {
            if (item.unit.includes('second')) {
                totalTimeSavedSeconds += timeDiff;
            } else if (item.unit.includes('millisecond')) {
                totalTimeSavedSeconds += (timeDiff / 1000); // Convert ms to seconds
            }
        }
    });

    // Format time saved string based on magnitude
    let timeSavedStr;
    if (totalTimeSavedSeconds >= 60) {
        const minutes = Math.floor(totalTimeSavedSeconds / 60);
        const seconds = (totalTimeSavedSeconds % 60).toFixed(1);
        timeSavedStr = `${minutes}m ${seconds}s`;
    } else {
        timeSavedStr = `${totalTimeSavedSeconds.toFixed(1)}s`;
    }

    return {
        avgImprovement,
        apiCount,
        timeSavedStr
    };
};