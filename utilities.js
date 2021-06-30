export function getPlantHealth(waterLevel){
    if (waterLevel < 3) {
        return 'thirsty';
    } else if (waterLevel <= 10) {
        return 'healthy';
    } else {
        return 'overwatered'; 
    }
}