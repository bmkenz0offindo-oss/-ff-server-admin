-- SOURCE ADMIN LE DUY: NHẸ TÂM + TAY DÀI + NGƯỜI ĐỎ (OB52)
function Main()
    -- 1. Nhẹ tâm: Kéo quá đầu vẫn tính Headshot
    Memory.Patch("0x2E1D454", "00 00 20 41") 
    Memory.Patch("0x2E1D468", "00 00 A0 40")
    Memory.Patch("0x2E1D440", "00 00 C8 42")

    -- 2. Nhìn xuyên tường & Người đỏ (Wallhack)
    Memory.Patch("0x2D8E4A0", "00 00 A0 41") 
    Memory.Patch("0x2D8E4B4", "00 00 80 3F")

    -- 3. Tay dài Antenna
    Memory.Patch("0x2D5C8A0", "00 00 A0 41") 

    -- 4. Skin M1014 Rồng Xanh
    SetSkin("M1014", "Blue_Dragon_EVO")
end
Main()
