(function() {
    var type_impls = Object.fromEntries([["smithay",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Coordinate-for-i32\" class=\"impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#impl-Coordinate-for-i32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"smithay/utils/trait.Coordinate.html\" title=\"trait smithay::utils::Coordinate\">Coordinate</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.ZERO\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#associatedconstant.ZERO\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"smithay/utils/trait.Coordinate.html#associatedconstant.ZERO\" class=\"constant\">ZERO</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a> = 0i32</h4></section></summary><div class='docblock'>A Coordinate that is 0</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.downscale\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.downscale\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.downscale\" class=\"fn\">downscale</a>(self, scale: Self) -&gt; Self</h4></section></summary><div class='docblock'>Downscale the coordinate</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.upscale\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.upscale\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.upscale\" class=\"fn\">upscale</a>(self, scale: Self) -&gt; Self</h4></section></summary><div class='docblock'>Upscale the coordinate</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_f64\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.to_f64\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.to_f64\" class=\"fn\">to_f64</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a></h4></section></summary><div class='docblock'>Convert the coordinate to a f64</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_f64\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.from_f64\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.from_f64\" class=\"fn\">from_f64</a>(v: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>) -&gt; Self</h4></section></summary><div class='docblock'>Convert to this coordinate from a f64</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.non_negative\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.non_negative\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.non_negative\" class=\"fn\">non_negative</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Test if the coordinate is not negative</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.abs\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.abs\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.abs\" class=\"fn\">abs</a>(self) -&gt; Self</h4></section></summary><div class='docblock'>Returns the absolute value of this coordinate</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.saturating_add\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.saturating_add\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.saturating_add\" class=\"fn\">saturating_add</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Saturating integer addition. Computes self + other, saturating at the numeric bounds instead of overflowing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.saturating_sub\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.saturating_sub\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.saturating_sub\" class=\"fn\">saturating_sub</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Saturating integer subtraction. Computes self - other, saturating at the numeric bounds instead of overflowing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.saturating_mul\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#197-203\">Source</a><a href=\"#method.saturating_mul\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#tymethod.saturating_mul\" class=\"fn\">saturating_mul</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Saturating integer multiplication. Computes self * other, saturating at the numeric bounds instead of overflowing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#43-49\">Source</a><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Compare and return the smaller one</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/utils/geometry.rs.html#51-57\">Source</a><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"smithay/utils/trait.Coordinate.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Compare and return the larger one</div></details></div></details>","Coordinate","smithay::backend::egl::ffi::EGLint"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CExclusiveZone%3E-for-i32\" class=\"impl\"><a class=\"src rightside\" href=\"src/smithay/wayland/shell/wlr_layer/types.rs.html#223-232\">Source</a><a href=\"#impl-From%3CExclusiveZone%3E-for-i32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"smithay/wayland/shell/wlr_layer/enum.ExclusiveZone.html\" title=\"enum smithay::wayland::shell::wlr_layer::ExclusiveZone\">ExclusiveZone</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>wayland_frontend</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/wayland/shell/wlr_layer/types.rs.html#225-231\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(z: <a class=\"enum\" href=\"smithay/wayland/shell/wlr_layer/enum.ExclusiveZone.html\" title=\"enum smithay::wayland::shell::wlr_layer::ExclusiveZone\">ExclusiveZone</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ExclusiveZone>","smithay::backend::egl::ffi::EGLint"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CTouchSlot%3E-for-i32\" class=\"impl\"><a class=\"src rightside\" href=\"src/smithay/backend/input/mod.rs.html#528-533\">Source</a><a href=\"#impl-From%3CTouchSlot%3E-for-i32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"smithay/backend/input/struct.TouchSlot.html\" title=\"struct smithay::backend::input::TouchSlot\">TouchSlot</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay/backend/input/mod.rs.html#530-532\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(slot: <a class=\"struct\" href=\"smithay/backend/input/struct.TouchSlot.html\" title=\"struct smithay::backend::input::TouchSlot\">TouchSlot</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<TouchSlot>","smithay::backend::egl::ffi::EGLint"]]],["winit",[]],["x11rb",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-i32\" class=\"impl\"><a href=\"#impl-Serialize-for-i32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a> as <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a>&gt;::<a class=\"associatedtype\" href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" title=\"type x11rb::x11_utils::Serialize::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb::protocol::render::Fixed","x11rb::protocol::xinput::Fp1616"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-i32\" class=\"impl\"><a href=\"#impl-TryParse-for-i32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb/xcb_ffi/enum.ParseError.html\" title=\"enum x11rb::xcb_ffi::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb::protocol::render::Fixed","x11rb::protocol::xinput::Fp1616"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10601,13,4537]}