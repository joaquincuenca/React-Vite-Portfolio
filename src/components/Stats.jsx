const stats = [
    { value: '5+', label: 'Years Coding' },
    { value: '10+', label: 'Completed Projects' },
    { value: '2+', label: 'Work Experience' },
    { value: '12+', label: 'Satisfied Clients' },
    ];

    const Stats = () => (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, idx) => (
        <div key={idx}>
            <p className="text-3xl font-bold text-yellow-400">{s.value}</p>
            <p className="text-sm text-gray-300">{s.label}</p>
        </div>
        ))}
    </section>
);

export default Stats;
