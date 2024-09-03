export function calculateFallDistance(t) {
    const g = 9.81;
    let d = (1 / 2) * g * t ^ 2;
    alert(`Расстояние, которое объект пролетел за ${t} секунд составило ${d} метров`);
}