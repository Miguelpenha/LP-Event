function useDate(dateRaw: string) {
    const date = new Date(dateRaw).toLocaleDateString('pt-br', {
        timeZone: 'UTC'
    })

    return date
}

export default useDate